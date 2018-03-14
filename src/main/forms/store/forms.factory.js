// @flow
import type {User} from '../types/User'
import type {Address} from '../types/Address'

const createNewUser = ():User => {
  return {
    id: '',
    name: '',
    email: '',
    addresses: [],
    lastModified: new Date(),
  }
}

const createNewAddress = ():Address => ({
  street: '',
  city: '',
  zipCode: '',
  country: '',
})

export {
  createNewUser,
  createNewAddress,
}
