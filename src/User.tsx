import { useParams } from 'react-router-dom';
import { auth } from './model/initModel';

const User = () => {
    const { uid } = useParams();
    console.log(auth.currentUser);

    return (
        <div>
            <h1>ユーザーページ</h1>
            <div>uid : {uid}</div>
        </div>
    );
}

export default User;
