import {ChartDataType} from './data.d'

const getChartListData: ChartDataType[] = [{
  id: '1',
  name: '图表一',
  type: 'bar',
  dimensions: [],
  measures: []
}];

export default {
  'GET  /api/chart/list': ( req, res ) => {
    res.send(getChartListData);
  }
}
