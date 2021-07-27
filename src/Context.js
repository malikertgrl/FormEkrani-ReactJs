import React, { Component, createContext } from 'react';

//Öncelikle createContext metodunu kullanarak bir context oluştururuz. Bu bize bir Context nesnesi döndürür.
// Context nesnesi içerisinde Provider ve Consumer adında 2 component bulunmaktadır.
const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            //neden return {} oldu normalde return()
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users,action.payload]
            }
        
        default:
            return state;
    }
}

// Daha sonrasında global olarak tutmak istediğimiz state’lerin bulunacağı component’i oluşturmamız
// gerekmektedir. Bu componentimizi userProvider olarak adlandıralım.

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Malik Ertuğrul",
                department: "IT",
                salary: "7000"
            },
            {
                id: 2,
                name: "Ali Veli",
                department: "Sales",
                salary: "5000"
            },
            {
                id: 3,
                name: "Mehmet Hasan",
                department: "Banking",
                salary: "9000"
            }


        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    // userContext.Provider içerisinde value adında bir props bulunmaktadır.
    // Buraya diğer componentler tarafından erişilmesini istediğimiz değerleri yazalım.
    // this.props.children, userContext component’inin tag’ları içerisinde yer alan tüm component’lerin,
    // value kısmına yazılmış olan değerlere erişebileceğini gösterir.


    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserConsumer;

// Provider component’imizin diğer componentler tarafında erişilebilir olmasını sağlayabilmek için component 
// ağacımızın en üstüne yerleştirmemiz gerekir.
// App componenti, uygulamamızın en üstünde bulunan component olduğu için,
// Provider component’ini de index.js içerisinde çağırarak sağlayabiliriz.