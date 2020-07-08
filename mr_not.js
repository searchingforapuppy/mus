const mrNot = (sequence, target) => {
    let message = [];
    const result = sequence.map((elem, i, self) => {
        if (elem === target) {
            return message[i] = '';
        }
        else if (elem !== target) {
            if (i === self.length - 1) return message[i] = `${elem}でない`
            else if (i !== self.length - 1) return message[i] = `${elem}でなく`
        };
    });
    return result.join('');
}

