import React from 'react';
import _merge from 'lodash/merge';
import { UsersGetAuthenticatedResponse } from '@octokit/rest';
import Octokit, {Options} from '@octokit/rest';
import setOctokit from '@/utils/octokit';
import GlobalContext, { GlobalConsumerProps, setDefaultGlobalData } from './context';

export interface GlobalProviderProps {
  octokit?: Octokit;
  setOctokit?: (octokit: Octokit) => void;
}

interface GlobalProviderState extends GlobalConsumerProps { }

export class GlobalProvider extends React.Component<GlobalProviderProps, GlobalProviderState> {
  constructor(props: GlobalProviderProps) {
    super(props);

    this.state = {
      ...setDefaultGlobalData(),
      setAuthorised: this.setAuthorised,
      setOctokit: this.setOctokit,
      setUserInfo: this.setUserInfo,
      setUserInfoLoading: this.setUserInfoLoading,
    };
  }

  setAuthorised = (authorised: boolean) => {
    this.setState({
      authorised,
    })
  }

  setOctokit = (options?: Options) => {
    this.setState({
      authorised: !!options?.auth,
      octokit: setOctokit(options),
    });
  }

  setUserInfo = (data?: UsersGetAuthenticatedResponse) => {
    this.setState({
      userInfo: data,
    });
  }

  setUserInfoLoading = (loading: boolean) => {
    this.setState({
      userInfoLoading: loading,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <GlobalContext.Provider value={this.state}>
        {children}
      </GlobalContext.Provider>
    );
  }
}
