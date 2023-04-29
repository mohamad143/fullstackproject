const home={name:'Home',url: '/'};
const about={name:'About',url: 'about'};
const store={name:'store',url: 'store'}
const signIn={name:'Sign In',url: 'sign-in'};
const signOut={name:'Sign Out',url: 'sign-Out'};
const signUpAsBusiness={name:'Business Registration',url: 'business-registration'};
const signUpAsRegular={name:'Regular Registration',url: 'regular-registration'};
const signUpAsAdmin={name:'Admin Registration',url: 'Admin-registration'};
const addItems={name:'addItems',url: 'add-items'};
const DeleteFromStore={name:'DeleteItem',url: 'delete-item'};
const UsersList={name:'Users',url:'Users'}
const OrdersList={name:'Orders',url:'Orders'}
const OrderForUser={name:'MyOrders',url:'OrderForUser'}


export const  MenuForGuestData=[home,about, signIn,signUpAsBusiness,signUpAsRegular,signUpAsAdmin ];
export const  MenuForRegularAccountData=[home,about,store,OrderForUser, signOut];
export const  MenuForBusinessAccountData=[home,about,store, addItems,DeleteFromStore,OrderForUser, signOut];
export const  MenuForAdminAccountData=[home,about,store,addItems,DeleteFromStore,UsersList,OrdersList,OrderForUser,signOut];

