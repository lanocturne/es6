'use strict';

class graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.refs={};
        this.ref=0;
        //init ajd list
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        // this.adj[w].push(v);
        this.edges++;
    }

    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
        	let op=`${i}->`;
            for (let j = 0; j < this.vertices; j++) {

                if (this.adj[i][j]) {
                	op+=`${this.adj[i][j]} `;
                }
            }
            console.log(op);
        }
    }
}

var cloneGraph=function(result,value){
	result.edges=value.edges;
	result.adj=value.adj.slice(0,value.adj.length);
};

var g = new graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(4, 5);
g.addEdge(4, 4);

var clone = new graph(6);

// cloneGraph(clone,g);
// clone.addEdge(1,2);
g.showGraph();
// clone.showGraph();
