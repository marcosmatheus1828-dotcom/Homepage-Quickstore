const form = document.querySelector('.auth-form');

const validators = {
    nome: (value) => {
        if (value.trim().length < 3) return 'Informe seu nome completo.';
        return '';
    },
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Informe um e-mail válido.';
        return '';
    },
    telefone: (value) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10 || digits.length > 11) return 'Informe um telefone válido.';
        return '';
    },
    cpf: (value) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length !== 11) return 'Informe um CPF válido.';
        return '';
    },
    senha: (value) => {
        if (value.length < 8) return 'A senha deve ter no mínimo 8 caracteres.';
        if (!/[A-Za-z]/.test(value) || !/\d/.test(value) || !/[^A-Za-z0-9]/.test(value)) {
            return 'Use letras, números e um caractere especial.';
        }
        return '';
    },
    'confirmar-senha': (value, formData) => {
        if (value !== formData.get('senha')) return 'As senhas não coincidem.';
        return '';
    },
    termos: (checked) => {
        if (!checked) return 'Você precisa aceitar os termos para continuar.';
        return '';
    },
};

function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-erro`);
    if (!input || !errorEl) return;

    if (message) {
        input.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.hidden = false;
    } else {
        input.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.hidden = true;
    }
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatCpf(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

document.getElementById('telefone')?.addEventListener('input', (e) => {
    e.target.value = formatPhone(e.target.value);
});

document.getElementById('cpf')?.addEventListener('input', (e) => {
    e.target.value = formatCpf(e.target.value);
});

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let isValid = true;

    Object.entries(validators).forEach(([fieldId, validate]) => {
        if (fieldId === 'termos') {
            const checked = document.getElementById('termos')?.checked;
            const message = validate(checked);
            showError(fieldId, message);
            if (message) isValid = false;
            return;
        }

        const input = document.getElementById(fieldId);
        if (!input) return;

        const message = validate(input.value, formData);
        showError(fieldId, message);
        if (message) isValid = false;
    });

    if (isValid) {
        alert('Cadastro realizado com sucesso! (simulação — backend ainda não implementado)');
        form.reset();
    }
});
