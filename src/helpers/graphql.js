import { get, mapValues } from 'lodash'

// The `graphql` method takes an optional second argument. This can be used
// to send additional information like variables needed in the query.
//
// Instead of explicitly writing:
//
//   graphql(someQuery, {
//     options: (props) => ({
//       variables: {
//         id: props.match.params.id
//       }
//     })
//   })
//
// The `withVarsFromProps` method DRYs up this common object into a method:
//
//   graphql(someQuery, withVarsFromProps({
//     id: 'match.params.id'
//   })
//
// Notice: props is omitted and a string using dot notation is passed
//
export const withVarsFromProps = (vars = {}) => ({
  options: (props) => ({
    variables: mapValues(vars, (value) => get(props, value))
  })
})
