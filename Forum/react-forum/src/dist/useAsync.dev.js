'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.reducer = reducer;
exports['default'] = void 0;

var _react = require('react');

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === '[object Arguments]'
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/* eslint-disable no-template-curly-in-string */
// loading , scuccess, error
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };

    case 'SUCCESS': {
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    }

    case 'ERROR': {
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    }

    default:
      throw new Error('Unhandled action type: ${action.type}');
  }
}

function useAsync(callback) {
  var deps =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var skip =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var _useReducer = (0, _react.useReducer)(reducer, {
      loading: false,
      data: null,
      error: false,
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];

  var fetchData = (0, _react.useCallback)(
    function _callee() {
      var data;
      return regeneratorRuntime.async(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                dispatch({
                  type: 'LOADING',
                });
                _context.prev = 1;
                _context.next = 4;
                return regeneratorRuntime.awrap(callback());

              case 4:
                data = _context.sent;
                dispatch({
                  type: 'SUCCESS',
                  data: data,
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](1);
                dispatch({
                  type: 'ERROR',
                  error: _context.t0,
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        },
        null,
        null,
        [[1, 8]],
      );
    },
    [callback],
  );
  (0, _react.useEffect)(function () {
    if (skip) {
      return;
    }

    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [state, fetchData];
}

var _default = useAsync;
exports['default'] = _default;
