export function getRandomNumber(min: number, max: number): string {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random.toString()
}

export function getRandomName(length: number = 6): string {
    const nameLength = Math.max(1, length);

    const randomName = Array.from({ length: nameLength }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join('');
    return randomName.charAt(0).toUpperCase() + randomName.slice(1).toLowerCase();
}

export function getRandomDOB(startYear: number = 1900, endYear: number = 2004): string {
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = Math.floor(Math.random() * 12) + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    const day = Math.floor(Math.random() * daysInMonth) + 1;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    return `${formattedDay}.${formattedMonth}.${year}`;
}

export function getRandomEmail(domain: string = 'test.com'): string {
    const usernameLength = Math.floor(Math.random() * 6) + 5;

    const username = Array.from({ length: usernameLength }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join('');
    return `${username}@${domain}`;
}

export function getRandomPassword(length: number = 12): string {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '@#$';
    const allChars = lowerCaseChars + upperCaseChars + numbers + specialChars;

    const password = [
        lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)],
        upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        specialChars[Math.floor(Math.random() * specialChars.length)]
    ];

    for (let i = password.length; i < length; i++) {
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join('');
}

export enum CountryCode {
    GERMANY = 'DE',
    NETHERLANDS = 'NL'
}

export function getRandomZipCode(countryCode: CountryCode): string {
    switch (countryCode) {
        case CountryCode.GERMANY:
            return (Math.floor(Math.random() * 90000) + 10000).toString();

        case CountryCode.NETHERLANDS:
            const dutchDigits = Math.floor(Math.random() * 9000) + 1000;
            const dutchLetters = String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
                String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            return `${dutchDigits} ${dutchLetters}`;

        default:
            throw new Error('Unsupported country');
    }
}