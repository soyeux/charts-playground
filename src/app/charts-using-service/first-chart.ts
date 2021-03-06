import { FirstChartJsonInterface } from '../data.service';
import { HighchartsService } from '../highcharts.service';
import * as _ from 'lodash';

export class FirstChart {
  private _highchartsOption: Highcharts.Options;
  constructor(private firstChartJsonInterfaceArray: FirstChartJsonInterface[]) {

    const installationData = [];
    const manufacturingData = [];
    const otherData = [];
    const projectDevelopmentData = [];
    const salesAndDistributionData = [];

    firstChartJsonInterfaceArray.forEach(
      data => {
        installationData.push(data.installation);
        manufacturingData.push(data.manufacturing);
        otherData.push(data.other);
        projectDevelopmentData.push(data.projectDevelopment);
        salesAndDistributionData.push(data.salesAndDistribution);
      }
    );

    const installationSerie = {
      name: "Installation",
      data: installationData
    };
    const manufacturingSerie = {
      name: "Manufacturing",
      data: manufacturingData
    };
    const salesAndDistributionSerie = {
      name: "Sales & Distribution",
      data: salesAndDistributionData
    };
    const projectDevelopmentSerie = {
      name: "Project Development",
      data: projectDevelopmentData
    };
    const otherSerie = {
      name: "Other",
      data: otherData
    };

    const serviceOption: Highcharts.Options = {
      title: {
        text: "Utilisation d'un service de graphe"
      },

      subtitle: {
        text: "voir code source"
      },

      credits: {
        enabled: true,
        href: 'https://www.highcharts.com/demo/line-basic',
        text: 'Source'
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      plotOptions: {
        series: {
         // pointStart: 2010
        }
      },

      series: [
        installationSerie,
        otherSerie,
        salesAndDistributionSerie,
        projectDevelopmentSerie,
        manufacturingSerie
      ]
    }

    this._highchartsOption = _.merge(HighchartsService.getDefaultOptions(), serviceOption);
  }

  get highchartsOption(): Highcharts.Options {
    return this._highchartsOption;
  }


}