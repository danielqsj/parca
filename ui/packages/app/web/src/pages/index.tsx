// Copyright 2022 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {QueryService} from '@parca/client';
import {useLocation, useNavigate} from 'react-router-dom';
import {convertToQueryParams, parseParams} from '@parca/functions';
import {ProfileExplorer} from '@parca/components';
import {createConnectTransport, createPromiseClient} from '@bufbuild/connect-web';

const apiEndpoint = process.env.REACT_APP_PUBLIC_API_ENDPOINT;

const queryClient = createPromiseClient(
  QueryService,
  createConnectTransport({
    baseUrl: apiEndpoint === undefined ? '/api' : `${apiEndpoint}/api`,
  })
);

const Profiles = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (path: string, queryParams: any) => {
    navigate({
      pathname: path,
      search: `?${convertToQueryParams(queryParams)}`,
    });
  };

  const queryParams = parseParams(location.search);

  return (
    <ProfileExplorer queryClient={queryClient} queryParams={queryParams} navigateTo={navigateTo} />
  );
};

export default Profiles;
