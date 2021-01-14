import { extendObservable } from 'mobx';

/**
 * UserStore
 */
class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            ussername: ''

        })
    }
}

export default new UserStore();