import {
  makeDebugger,
  asyncRes,
  $solver,
  dispatchEvent,
  EVENT,
} from '../../utils'
import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunitiesBanner')
/* eslint-enable no-unused-vars */

let communitiesBanner = null

export function loadCategories() {
  sr71$.query(S.pagedCategories, { filter: {} })
}

export function tabOnChange(activeRaw) {
  communitiesBanner.markRoute({
    subPath: activeRaw,
  })
  communitiesBanner.markState({
    activeRaw,
  })
  dispatchEvent(EVENT.REFRESH_COMMUNITIES, { data: activeRaw })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedCategories'),
    action: ({ pagedCategories }) => {
      communitiesBanner.markState({
        pagedCategories,
      })
    },
  },
]
const ErrSolver = []

export function init(selectedStore) {
  communitiesBanner = selectedStore
  debug(communitiesBanner)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadCategories()
}
