/*
 * 定义列的百分比
 * @param: column, 1~10
 * */
export const column = ({col}) => {
    if (col && Number(col)) {
        const percentage = [
            8.33333333,
            16.66666667,
            25,
            33.33333333,
            41.66666667,
            50,
            58.33333333,
            66.66666667,
            75,
            83.33333333,
            91.66666667,
            100
        ];
        return `width:${percentage[col-1]}%;`;
    }
};
