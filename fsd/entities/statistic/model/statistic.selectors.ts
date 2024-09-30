// import { shallow } from "zustand/shallow";
// import {useUserStore} from "./statistic.store";
//
// export const useUserActions = () => {
//   const {user, setUser} = useUserStore(
//     (state) => ({
//       user: state.user,
//       setUser: state.setUser,
//
//     }),
//     shallow // Использование shallow для поверхностного сравнения
//   );
//
//   return {user, setUser};
// };