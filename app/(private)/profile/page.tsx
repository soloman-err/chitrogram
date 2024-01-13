import Login from '@/app/(auth)/login/page';
import Image from 'next/image';

const username = 'solo';
const user = false;

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      {user ? (
        <>
          <div className="flex justify-center">
            <Image
              src={''}
              alt=""
              className="bg-dark/10 w-40 h-40 rounded-full"
              width={500}
              height={500}
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">SOLO</h2>
            <p className="text-sm font-semibold text-dark/60">@{username}</p>

            <div className="flex justify-center gap-4 font-semibold">
              <p>0 Followers</p>
              <p>0 Following</p>
            </div>

            <div>
              <button>Edit Profile</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default Profile;
