import ApexCharts from "react-apexcharts";

export default function DashboardPage() {
  const series: {
    name: string;
    data: number[];
  }[] = [
    {
      name: "germany",
      data: [174, 139, 112, 266, 270, 290, 202, 102],
    },
    {
      name: "us",
      data: [180, 52, 183, 278, 241, 182, 197, 170],
    },
    {
      name: "france",
      data: [247, 84, 229, 46, 142, 138, 76, 194],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    title: {
      text: "Transportation Index",
    },
    chart: {
      id: "line-chart",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        // color: ["red", "green", "blue"],
        opacity: 0.25,
      },
    },
    markers: {
      size: 0,
      // strokeColors: ["red", "green", "blue"],
      strokeWidth: 2,
      strokeOpacity: 0.9,
      fillOpacity: 1,
      radius: 0,
      hover: {
        size: 5,
      },
    },
    grid: {
      show: true,
      // padding: {
      //   top: 0,
      //   right: 10,
      //   bottom: 0,
      //   left: 10,
      // },
    },
    legend: {
      show: true,
      position: "bottom",
      height: 40,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "plane",
        "train",
        "subway",
        "bus",
        "car",
        "bicycle",
        "horse",
        "others",
      ],
      labels: {
        rotate: -90,
      },
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        strokeWidth: 1,
      },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2, 2],
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard!</h1>
      <ApexCharts
        type={"line"}
        width={600}
        height={350}
        series={series}
        options={options}
      />
    </div>
  );
}
