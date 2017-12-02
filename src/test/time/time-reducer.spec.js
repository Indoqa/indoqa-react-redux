import {Observable} from 'rxjs'
import {createTestStore} from '../createTestStore'
import {fetchTime} from '../../main/time/store/time.actions'

describe('time reducer', () => {
  it('should return correct actions', () => {
    const deps = {
      ajax: {
        getJSON: () => Observable.of({
          timezoneId: 'Europe/Vienna',
        })
      }
    }
    const store = createTestStore(deps)
    const action = fetchTime(47, 10)
    store.dispatch(action)

    expect(store.getState().time).toEqual({
      error: null,
      isLoading: false,
      results: [
        {
          timezoneId: 'Europe/Vienna',
        }
      ]
    })
  })
})
