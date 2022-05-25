const getEmployeer = (
  name,
  surName,
  fatherName,
  staff,
  orders = [],
  passport = {}
) => ({
  name,
  surName,
  fatherName,
  staff,
  orders,
  passport
});

const getOrder = (employeer, contract, beginDate, endDate) => ({
  employeer,
  contract,
  beginDate,
  endDate
});
// календарь объект - данные от начала года
// каленларь это виджет, но должен отображать но отображает
// информацию о закоммандированных уже днях для работника
// отображает 6 недель, все недели содержащие дни этого месяца
// может переключать месяцы этого года, но в пределах года
