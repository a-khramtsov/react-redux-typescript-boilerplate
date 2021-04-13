
import { useSelector } from 'react-redux';
import { MeType, RoleEnum } from 'types/me';
import { RootState } from 'types/redux/redux';

const withRolePermissions = (Component: React.ReactNode | any, role: RoleEnum) => {
    return (props: any) => {
        const me = useSelector<RootState, MeType>(state => state.me.userInfo)
        // if (!me.role[role]) {
        // 	return <Redirect to='/'/>
        // }

        return (
            <Component {...props} />
        )
    }
}

export default withRolePermissions