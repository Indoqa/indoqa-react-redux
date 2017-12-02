import {Observable} from 'rxjs'
import {ActionsObservable} from 'redux-observable'
import {fetchTime} from '../../main/time/store/time.actions'
import {fetchTimeEpic$} from '../../main/time/store/time.epics'

describe('time epics', () => {
  it('should return correct actions', () => {
    const action$ = ActionsObservable.of(fetchTime(47, 10))
    const deps = {
      ajax: {
        getJSON: () => Observable.of({
          'timezoneId': 'Europe/Vienna',
        })
      }
    }
    const output$ = fetchTimeEpic$(action$, null, deps)

    output$.subscribe(action => {
      expect(action.type).toBe('FETCH_TIME_SUCCESS')
      expect(action.payload).toEqual([{
        'timezoneId': 'Europe/Vienna',
      }])
    })
  })
})
