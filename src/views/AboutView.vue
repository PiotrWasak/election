<template>
  <div class="about">
    <div>
      <h3>Typowanie</h3>
      <p>Każdy uczestnik przed wyborami typuje, ile procent głosów zdobędzie każda z głównych partii.</p>

      <h3>Punktacja</h3>
      <p>Uczestnicy zdobywają punkty w zależności od tego, jak blisko ich typowanie było do rzeczywistego wyniku. Można
        przyjąć, że za każdy 0,1 procenta błędu uczestnik traci 1 punkt. Czyli, jeżeli rzeczywisty wynik to 20% a
        typowanie
        to 22%, uczestnik zdobywa 80 punktów (100 - 20).</p>

      <h3>Suma Punktów</h3>
      <p>Wygrywa osoba, która po zsumowaniu punktów za wszystkie partii, ma ich najwięcej.</p>

      <h3>Nagroda</h3>
      <p>1 miejsce: 70% puli
        2 miejsce: 30% puli

        Jeśli udział weźmie mniej niż 4 osoby, wygrany zgarnia 100% puli.</p>

      <h3>Termin</h3>
      <p>Wszystkie typowania muszą być zgłoszone przed zamknięciem lokali wyborczych w dniu wyborów i nie mogą być
        zmieniane
        po tym terminie.</p>

      <h3>Transparentność</h3>
      <p>Po ogłoszeniu wyników, wszystkie typowania i zdobyte punkty są ujawniane wszystkim uczestnikom.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

h3 {
  font-size: 150%;
}

p {
  margin-bottom: 10px;
}
</style>
