"use client";


interface BarChartProps {
    data: { name: string; total: number }[];
}

const CustomBarChart = ({ data }: BarChartProps) => {
    return (
        <div>Bar Chart Component</div>
    );
};

export default CustomBarChart;
