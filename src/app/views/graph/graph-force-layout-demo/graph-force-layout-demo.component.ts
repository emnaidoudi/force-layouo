import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EChartOption } from 'echarts';
import {GraphService} from "../graph.service";

declare const require: any;

@Component({
  selector: 'app-graph-force-layout-demo',
  templateUrl: './graph-force-layout-demo.component.html',
  styleUrls: ['./graph-force-layout-demo.component.scss']
})
export class GraphForceLayoutDemoComponent implements OnInit {
  demo_html = require('!!html-loader!./graph-force-layout-demo.component.html');
  demo_ts = require('!!raw-loader!./graph-force-layout-demo.component.ts');

  options: Object;

  constructor(private data: GraphService) { }

  ngOnInit() {
    this.options = this.data.loadGraph().pipe(
      map(data => {
        const graph : Object= data ;
        var categories = [];
        var list_categories = ["Advyteam France","Advyteam Tunisie","Advyteam Maroc"];
        for (var i = 0; i < 3; i++) {
          categories[i] = {
            name: list_categories[i]
          };
        }
        graph["nodes"].forEach(function (node) {
          node.itemStyle = null;
          node.symbolSize = 10;
          node.value = node.score;
          var x="site"
          node.category = node.employee[x];
          //console.log("category: ",node.category)
          // Use random x, y
          node.x = node.x;
          node.y = node.y;
          node.draggable = true;
        });
        return {
          title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [{
            data: categories.map(function (a) {
              return a.name;
            })
          }] as EChartOption.Legend,
          animation: false,
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'force',
              data: graph["nodes"],
              links: graph["links"],
              categories: categories,
              roam: true,
              label: {
                normal: {
                  position: 'right'
                }
              },
              lineStyle: {
                normal: {
                  color: 'source', //source
                  //curveness: 0.3,
                  opacity: 0.7
                },
              },
              force: {
                repulsion: 100
              }
            }
          ]
        };
      })
    );
  }

}
