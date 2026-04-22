import { getFirebaseDb, getFirebaseStorage, getFirebaseAuth } from "@/lib/firebase";

/**
 * 새로운 활동(Activity) 데이터를 Firestore 'activity' 컬렉션에 저장합니다.
 * 
 * @param data - 활동 정보 객체
 * @param data.title - 활동 제목
 * @param data.content - 활동 내용 (본문)
 * @param data.image - 업로드된 이미지의 URL
 * @returns 성공 시 { status: 200 }, 실패 시 401(인증 에러) 또는 500(서버 에러)과 메시지 반환
 */
export const CreateActivity = async (data: { title: string, content: string, image: string }) => {
  try {
    const db = await getFirebaseDb();
    if (!db) {
      return {
        status: 500 as const,
        message: 'Firebase가 초기화되지 않았습니다. 페이지를 새로고침해주세요.'
      };
    }

    const auth = await getFirebaseAuth();
    const currentUser = auth?.currentUser;
    
    if (!currentUser) {
      return {
        status: 401 as const,
        message: '로그인이 필요합니다. 다시 로그인해주세요.'
      };
    }

    const docData = {
      ...data,
      uid: currentUser.uid,
      createdAt: new Date().toISOString()
    };

    const { collection, addDoc } = await import("firebase/firestore");
    const docRef = await addDoc(collection(db, "activity"), docData);
    
    return { status: 200 as const };
  } catch (e) {
    let message = '활동 작성에 실패했습니다.';
    if (e instanceof Error) {
      message = e.message;

      if ('code' in e) {
        const firebaseError = e as { code: string };
        switch (firebaseError.code) {
          case 'permission-denied':
            message = '권한이 없습니다. 관리자 권한을 확인해주세요.';
            break;
          case 'unavailable':
            message = 'Firebase 서버에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.';
            break;
          case 'unauthenticated':
            message = '인증되지 않았습니다. 다시 로그인해주세요.';
            break;
        }
      }
    }

    return { status: 500 as const, message };
  }
};

/**
 * 선택한 이미지 파일을 Firebase Storage에 업로드하고 다운로드 가능한 URL을 생성합니다.
 * 
 * @param data - 'file' 키를 가진 FormData 객체
 * @returns 성공 시 { url: string }, 실패 시 { url: null, message: string } 반환
 */
export const uploadImg = async (data: FormData) => {
  try {
    const storage = await getFirebaseStorage();
    if (!storage) {
      return {
        url: null,
        message: 'Firebase Storage가 초기화되지 않았습니다. 페이지를 새로고침해주세요.'
      };
    }

    const file = data.get('file') as File;
    if (!file) {
      throw new Error("파일이 선택되지 않았습니다.");
    }

    const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
    const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => {
        reject(new Error("이미지 업로드 시간이 초과되었습니다."));
      }, 60000)
    );

    const uploadPromise = uploadBytes(storageRef, file)
      .then((snapshot) => getDownloadURL(snapshot.ref));

    const downloadURL = await Promise.race([uploadPromise, timeoutPromise]);

    return { url: downloadURL };
  } catch (e) {
    let message = '이미지 업로드에 실패했습니다.';
    if (e instanceof Error) {
      message = e.message;

      if ('code' in e) {
        const firebaseError = e as { code: string };
        switch (firebaseError.code) {
          case 'storage/unauthorized':
            message = '이미지 업로드 권한이 없습니다.';
            break;
          case 'storage/canceled':
            message = '이미지 업로드가 취소되었습니다.';
            break;
          case 'storage/unknown':
            message = '알 수 없는 오류가 발생했습니다.';
            break;
        }
      }
    }

    return { url: null, message };
  }
};
