
interface Users {
  id: number;
  name: string;
  email: string;
}

export async function getServerSideProps() {

  const p1 = async (): Promise<string> => 'hello'
  const p2 = async (): Promise<string> => 'world'

  const myP = async (p1: Promise<string>, p2: Promise<string>) : Promise<string> => {
    const [mp1, mp2] = await Promise.all([p1,p2])
    return mp1 + mp2
  }
  const myPromiseString = await myP(p1(), p2()).then((result) => result)
  
  return {
    props: {
      myPromiseString,
    },
  };
}

const UsersPage = ({ myPromiseString }: {myPromiseString: string}) => {
  return (
    <div>
      <h1>Users</h1>
      {myPromiseString}
    </div>
  );
};

export default UsersPage;