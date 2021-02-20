import 'vuex'

// Vuex Storeの肩を拡張するために汎用的に使うプロジェクト全体のための型定義
declare module 'vuex' {
  export type Getters<S, G> = {
    [K in keyof G]: (
      state: S,
      getters: G,
      rootState: RootState,
      rootGetters: RootGetters
    ) => G[K]
  }

  export type Mutations<S, M> = { [K in keyof M]: (state: S, payload: M[K]) => void }
  type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
  type ExDispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any
  type ExActionContext<S, A, G, M> = {
    commit: ExCommit<M>
    dispatch: ExDispatch<A>
    state: S
    getters: G
    rootState: RootState
    rootGetters: RootGetters
  }
  export type Actions<S, A, G = {}, M = {}> = {
    [K in keyof A]: (ctx: ExActionContext<S, A, G, M>, payload: A[K]) => any
  }

  interface ExStore extends Store<RootState> {
    getters: RootGetters
    commit: ExCommit<RootMutations>
    dispatch: ExDispatch<RootActions>
  }

  type StoreContext = ExActionContext<
    RootState,
    RootActions,
    RootGetters,
    RootMutations
  >
}
