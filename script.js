// Инициализация EmailJS с твоим Public Key
emailjs.init('rSInGuLnIXCZi8vPp');

// Функция для добавления нового участника
document.getElementById('add-participant').addEventListener('click', function () {
  const participantsSection = document.getElementById('participants-section');
  const participantCount = document.querySelectorAll('.participant-card').length + 1;

  const newParticipant = `
    <div class="card mb-4 participant-card">
      <div class="card-header">
        <h2 class="mb-0"><i class="fas fa-user me-2"></i>Данные участника ${participantCount}</h2>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="participant${participantCount}-name" class="form-label">ФИО:</label>
          <input type="text" class="form-control" id="participant${participantCount}-name" required>
        </div>
        <div class="mb-3">
          <label for="participant${participantCount}-phone" class="form-label">Контактный телефон:</label>
          <input type="tel" class="form-control" id="participant${participantCount}-phone" required>
        </div>
        <div class="mb-3">
          <label for="participant${participantCount}-license" class="form-label">Данные водительского удостоверения:</label>
          <input type="text" class="form-control" id="participant${participantCount}-license" required>
        </div>
        <div class="mb-3">
          <label for="participant${participantCount}-vehicle" class="form-label">Данные транспортного средства (марка, модель, госномер, VIN):</label>
          <input type="text" class="form-control" id="participant${participantCount}-vehicle" required>
        </div>
        <div class="mb-3">
          <label for="participant${participantCount}-insurance" class="form-label">Данные страхового полиса (номер, срок действия):</label>
          <input type="text" class="form-control" id="participant${participantCount}-insurance" required>
        </div>
      </div>
    </div>
  `;

  participantsSection.insertAdjacentHTML('beforeend', newParticipant);
});

// Обработка отправки формы
document.getElementById('europrotocol-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Собираем данные из формы
  const formData = {
    date: document.getElementById('accident-date').value,
    location: document.getElementById('accident-location').value,
    participantsCount: document.getElementById('participants-count').value,
    participant1Name: document.getElementById('participant1-name').value,
    participant1Phone: document.getElementById('participant1-phone').value,
    participant1License: document.getElementById('participant1-license').value,
    participant1Vehicle: document.getElementById('participant1-vehicle').