import {Observable} from 'rxjs'
import {VirtualTimeScheduler} from 'rxjs/scheduler/VirtualTimeScheduler'

import {createTestStore} from '../createTestStore'
import {selectWordsState} from '../../main/app/selectors'
import {fetchWords} from '../../main/words/store/words.actions'

describe('words reducer', () => {
  it('should return correct success state', () => {
    const scheduler = new VirtualTimeScheduler()
    const deps = {
      ajax: {
        getJSON: () => Observable.of({
          totalResults: 113,
          searchResults: [
            {
              word: 'ab',
            },
            {
              word: 'about',
            },
            {
              word: 'able',
            },
          ],
        }),
      },
      scheduler,
    }
    const store = createTestStore(deps)
    store.dispatch(fetchWords('ab'))
    // since there are time based operations, flush will process all queued up actions immediately
    scheduler.flush()

    expect(selectWordsState(store.getState())).toEqual({
      error: null,
      prefix: 'ab',
      isLoading: false,
      results: ['ab', 'about', 'able'],
    })
  })
})
