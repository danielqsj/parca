// @generated by protoc-gen-connect-web v0.2.0 with parameter "target=js+dts"
// @generated from file parca/query/v1alpha1/query.proto (package parca.query.v1alpha1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {LabelsRequest, LabelsResponse, ProfileTypesRequest, ProfileTypesResponse, QueryRangeRequest, QueryRangeResponse, QueryRequest, QueryResponse, SeriesRequest, SeriesResponse, ShareProfileRequest, ShareProfileResponse, ValuesRequest, ValuesResponse} from "./query_pb";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * QueryService is the service that provides APIs to retrieve and inspect profiles
 *
 * @generated from service parca.query.v1alpha1.QueryService
 */
export const QueryService = {
  typeName: "parca.query.v1alpha1.QueryService",
  methods: {
    /**
     * QueryRange performs a profile query over a time range
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.QueryRange
     */
    queryRange: {
      name: "QueryRange",
      I: QueryRangeRequest,
      O: QueryRangeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Query performs a profile query
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.Query
     */
    query: {
      name: "Query",
      I: QueryRequest,
      O: QueryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Series is unimplemented
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.Series
     */
    series: {
      name: "Series",
      I: SeriesRequest,
      O: SeriesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ProfileTypes returns the list of available profile types.
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.ProfileTypes
     */
    profileTypes: {
      name: "ProfileTypes",
      I: ProfileTypesRequest,
      O: ProfileTypesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Labels returns the set of label names against a given matching string and time frame
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.Labels
     */
    labels: {
      name: "Labels",
      I: LabelsRequest,
      O: LabelsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Values returns the set of values that match a given label and time frame
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.Values
     */
    values: {
      name: "Values",
      I: ValuesRequest,
      O: ValuesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ShareProfile uploads the given profile to pprof.me and returns a link to the profile.
     *
     * @generated from rpc parca.query.v1alpha1.QueryService.ShareProfile
     */
    shareProfile: {
      name: "ShareProfile",
      I: ShareProfileRequest,
      O: ShareProfileResponse,
      kind: MethodKind.Unary,
    },
  }
};

