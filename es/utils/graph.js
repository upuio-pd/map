"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
//JS porting of this code http://www.geeksforgeeks.org/biconnected-components/

function create_array(length) {
  var array = [];
  for (var i = 0; i < length; ++i) {
    array.push([]);
  }
  return array;
}
var Edge = /*#__PURE__*/_createClass(function Edge(u, v) {
  _classCallCheck(this, Edge);
  this.u = u;
  this.v = v;
});
var Graph = /*#__PURE__*/function () {
  function Graph(v) {
    _classCallCheck(this, Graph);
    this.count = 0; // count is number of biconnected components
    this.subgraphs = []; //biconnected components
    this.time = 0; // time is used to find discovery times

    this.V = v; // No. of vertices
    this.E = 0; // No. of Edges
    this.adj = []; // Adjacency List

    this.adj = create_array(v);
  }

  //Function to add an edge into the graph
  return _createClass(Graph, [{
    key: "addEdge",
    value: function addEdge(v, w) {
      this.adj[v].push(w);
      this.E++;
    }

    // A recursive function that finds and prints strongly connected
    // components using DFS traversal
    // u --> The vertex to be visited next
    // disc[] --> Stores discovery times of visited vertices
    // low[] -- >> earliest visited vertex (the vertex with minimum
    //             discovery time) that can be reached from subtree
    //             rooted with current vertex
    // *st -- >> To store visited edges
    // // A recursive function that finds and prints strongly connected
    // components using DFS traversal
    // u --> The vertex to be visited next
    // disc[] --> Stores discovery times of visited vertices
    // low[] -- >> earliest visited vertex (the vertex with minimum
    //             discovery time) that can be reached from subtree
    //             rooted with current vertex
    // *st -- >> To store visited edges
  }, {
    key: "_BCCUtil",
    value: function _BCCUtil(u, disc, low, st, parent) {
      var _this = this;
      // Initialize discovery time and low value
      disc[u] = low[u] = ++this.time;
      this.children = 0;

      // Go through all vertices adjacent to this
      // v is current adjacent of 'u'
      this.adj[u].forEach(function (v) {
        // If v is not visited yet, then recur for it
        if (disc[v] == -1) {
          _this.children++;
          parent[v] = u;

          // store the edge in stack
          st.push(new Edge(u, v));
          _this._BCCUtil(v, disc, low, st, parent);

          // Check if the subtree rooted with 'v' has a
          // connection to one of the ancestors of 'u'
          // Case 1 -- per Strongly Connected Components Article
          if (low[u] > low[v]) low[u] = low[v];

          // If u is an articulation point,
          // pop all edges from stack till u -- v
          if (disc[u] == 1 && _this.children > 1 || disc[u] > 1 && low[v] >= disc[u]) {
            var subgraph = [];
            while (st[st.length - 1].u != u || st[st.length - 1].v != v) {
              subgraph.push(st[st.length - 1]);
              //console.log(st[st.length - 1].u + "--" + st[st.length - 1].v + " ");
              st.splice(st.length - 1, 1);
            }
            subgraph.push(st[st.length - 1]);
            //console.log(st[st.length - 1].u + "--" + st[st.length - 1].v + " ");
            _this.subgraphs.push(subgraph);
            subgraph = [];
            //console.log()
            st.splice(st.length - 1, 1);
            _this.count++;
          }
        }

        // Update low value of 'u' only of 'v' is still in stack
        // (i.e. it's a back edge, not cross edge).
        // Case 2 -- per Strongly Connected Components Article
        else if (v != parent[u] && disc[v] < low[u]) {
          if (low[u] > disc[v]) low[u] = disc[v];
          st.push(new Edge(u, v));
        }
      });
    }
  }, {
    key: "BCC",
    value: function BCC() {
      var V = this.V;
      var disc = create_array(V);
      var low = create_array(V);
      var parent = create_array(V);
      var st = [];

      // Initialize disc and low, and parent arrays
      for (var i = 0; i < V; i++) {
        disc[i] = -1;
        low[i] = -1;
        parent[i] = -1;
      }
      for (var _i = 0; _i < V; _i++) {
        if (disc[_i] == -1) this._BCCUtil(_i, disc, low, st, parent);
        var j = 0;

        // If stack is not empty, pop all edges from stack
        var subgraph = [];
        while (st.length > 0) {
          j = 1;
          subgraph.push(st[st.length - 1]);
          //console.log(st[st.length - 1].u + "--" + st[st.length - 1].v + " ");
          st.splice(st.length - 1, 1);
        }
        if (j == 1) {
          this.subgraphs.push(subgraph);
          subgraph = [];
          //console.log();
          this.count++;
        }
      }
    }
  }]);
}();
module.exports = Graph;