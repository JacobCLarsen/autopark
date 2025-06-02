async function validateGeneralInfo(name: string, phone: string, email: string, password: string, address: string) {
    const errors: { [key: string]: string } = {};

    // Validate name
    // Check if name contains characters from other languages, but no numbers or special characters
    const nameRegex = /^[\p{L}\s]+$/u;
    if (!nameRegex.test(name)) {
        errors.name = "Name must not contain numbers or special characters";
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        errors.name = "Name is required";
    }

    // Validate phone
    const phoneRegex = /^\d{8}$/;
    if (!phone || !phoneRegex.test(phone)) {
        errors.phone = "Phone number must be 8 digits";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.email = "Email is invalid";
    }

    // Validate password contains an uppercase letter, a special character, and a number
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
        errors.password = "Password must include at least one uppercase letter, one special character, and one number";
    }

    // Validate password length
    if (!password || password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    // Validate address
    if (!address || typeof address !== 'string' || address.trim().length === 0) {
        errors.address = "Address is required and must be a non-empty string";
    }

    return errors;
}

export { validateGeneralInfo }