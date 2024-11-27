import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const Chart = () => {
    let data = [
        {
          "id": "생활용품",
          "label": "생활용품",
          "value": 35,
          "color": "hsl(321, 70%, 50%)"
        },
        {
          "id": "관광",
          "label": "관광",
          "value": 32,
          "color": "rgba(1,1,1,1)"
        },
        {
          "id": "식비",
          "label": "식비",
          "value": 24,
          "color": "hsl(321, 70%, 50%)"
        },
        {
          "id": "여가",
          "label": "여가",
          "value": 12,
          "color": "hsl(127, 70%, 50%)"
        }
    ]

  return (
    <div style={{height:'400px'}}>
         <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        colors={[
            '#281A6F','#6042F8','#ED46DC','#57F367','#2D64F1','#5BADF9'
        ]}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    10
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: '생활용품',
                },
                id: '생활용품'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}

export default Chart