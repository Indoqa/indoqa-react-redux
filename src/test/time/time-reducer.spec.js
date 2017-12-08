import {Observable} from 'rxjs'
import {createTestStore} from '../createTestStore'
import {fetchTime} from '../../main/time/store/time.actions'

describe('time reducer', () => {
  it('should return correct success state', () => {
    const deps = {
      ajax: {
        getJSON: () => Observable.of({
          timezoneId: 'Europe/Vienna',
        }),
      },
    }
    const store = createTestStore(deps)
    store.dispatch(fetchTime(47, 10))

    expect(store.getState().time).toEqual({
      error: null,
      isLoading: false,
      results: [
        {
          timezoneId: 'Europe/Vienna',
        }
      ],
    })
  })

  it('should return correct error state', () => {
    const deps = {
      ajax: {
        getJSON: () => Observable.throw(new Error('error: non existing path')),
      },
    }
    const store = createTestStore(deps)
    store.dispatch(fetchTime(47, 10))

    expect(store.getState().time).toEqual({
      error: 'error: non existing path',
      isLoading: false,
      results: null,
    })
  })
})
