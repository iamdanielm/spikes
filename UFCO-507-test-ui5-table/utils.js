export const camelCaseToNormalCase = (string) => {
  const result = string.replace(/[A-Z]/g, ' $&');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const data = [
  {
    company: "ABC Inc.",
    document: 123456789,
    postingDate: "2020-05-10",
    amount: "123456.78",
    currency: "USD",
    group: 1
  },
  {
    company: "XYZ Corp",
    document: 234567890,
    postingDate: "2021-01-15",
    amount: "98765.43",
    currency: "EUR",
    group: 5
  },
  {
    company: "Global Industries",
    document: 345678901,
    postingDate: "2020-10-20",
    amount: "-654321.09",
    currency: "GBP",
    group: 4
  },
  {
    company: "Awesome Co",
    document: 456789012,
    postingDate: "2022-02-28",
    amount: "23456.78",
    currency: "JPY",
    group: 4
  },
  {
    company: "XYZ Inc",
    document: 892734567,
    postingDate: "2022-03-02",
    amount: "-987654.32",
    currency: "JPY",
    group: 2
  },
  {
    company: "MNO Corp",
    document: 542368192,
    postingDate: "2021-06-21",
    amount: "45678.90",
    currency: "CAD",
    group: 2
  },
  {
    company: "PQR Industries",
    document: 398475619,
    postingDate: "2023-01-10",
    amount: "-56789.12",
    currency: "AUD",
    group: 3
  },
  {
    company: "LMN Co",
    document: 789345612,
    postingDate: "2020-12-05",
    amount: "123456.78",
    currency: "USD",
    group: 3
  },
  {
    company: "STU Corp",
    document: 123678954,
    postingDate: "2022-02-15",
    amount: "-9876.54",
    currency: "GBP",
    group: 1
  },
  {
    company: "VWX Inc",
    document: 345127986,
    postingDate: "2021-08-07",
    amount: "54321.09",
    currency: "EUR",
    group: 2
    
  },
  {
    company: "DEF Co",
    document: 239875647,
    postingDate: "2022-10-22",
    amount: "98765.43",
    currency: "CAD",
    group: 2
  },
  {
    company: "QRS Corp",
    document: 543987126,
    postingDate: "2023-03-30",
    amount: "-45678.90",
    currency: "USD",
    group: 1
  },
  {
    company: "GHI Industries",
    document: 892376451,
    postingDate: "2020-04-12",
    amount: "23456.78",
    currency: "GBP",
    group: 1
  },
  {
    company: "TUV Co",
    document: 673495128,
    postingDate: "2022-01-01",
    amount: "-56789.12",
    currency: "JPY",
    group: 1
  },
  {
    company: "GHI Co",
    document: 315467892,
    postingDate: "2023-02-20",
    amount: "-56789.12",
    currency: "AUD",
    group: 1
  },
  {
    company: "JKL Ltd",
    document: 746128935,
    postingDate: "2020-11-15",
    amount: "123456.78",
    currency: "CAD",
    group: 1
  },
  {
    company: "MNO Inc",
    document: 239875462,
    postingDate: "2022-08-25",
    amount: "-9876.54",
    currency: "GBP",
    group: 3
  },
  {
    company: "PQR Corp",
    document: 783945612,
    postingDate: "2021-09-01",
    amount: "45678.90",
    currency: "EUR",
    group: 2
  },
  {
    company: "STU Co",
    document: 542139876,
    postingDate: "2022-12-12",
    amount: "-987654.32",
    currency: "USD",
    group: 2
  },
  {
    company: "VWX Industries",
    document: 467812359,
    postingDate: "2020-02-28",
    amount: "23456.78",
    currency: "AUD",
    group: 4
  }
]