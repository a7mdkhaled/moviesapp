import {IContext} from 'overmind';
import {createStateHook, createActionsHook} from 'overmind-react';
import * as actions from './actions';
import * as effects from './effects';

type State = {
  movies: {
    list: [];
    favoriteList: [];
    loading: boolean;
    loadMoreLoading: boolean;
  };
};

export type Context = IContext<typeof config>;

// the state
const state: State = {
  movies: {
    list: [],
    favoriteList: [],
    loading: false,
    loadMoreLoading: false,
  },
};

// hook to get access in our components
export const useOvermind = createStateHook<Context>();
export const useActions = createActionsHook<Context>();

// confirguraion object
export const config = {
  state,
  actions,
  effects,
};
