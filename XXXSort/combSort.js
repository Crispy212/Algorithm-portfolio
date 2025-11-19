export function combSort(arr) {
    let iterations = 0;

    let gap = arr.length;
    const shrink = 1.3;
    let sorted = false;

    while (!sorted) {
        iterations++;

        gap = Math.floor(gap / shrink);

        if (gap <= 1) {
            gap = 1;
            sorted = true;
        } else if (gap === 9 || gap === 10) {
            gap = 11; // "rule of 11"
        }

        let i = 0;
        while (i + gap < arr.length) {
            iterations++;

            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                sorted = false;
            }

            i++;
        }
    }

    return {
        arr,
        iterations,
        sorted: true
    };
}
