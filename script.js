function validateForm() {
    let nameInput = document.getElementById('name').value.trim();
    let passwordInput = document.getElementById('password').value.trim();
    
    let nameError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');
    
    
  
    // Reset error messages
    nameError.textContent = '';
    passwordError.textContent = '';
  
    // Validate Name
    if (nameInput === '') {
      nameError.textContent = 'Name is required';
      return false;
    } 
    else if (nameInput.length > 25) {
      nameError.textContent = 'Name cannot exceed 25 characters';
      return false;
    }
  
    // Validate Password
    if (passwordInput.length > 20) {
      passwordError.textContent = 'Password cannot exceed 20 characters';
      return false;
    }
  
    return true;
  }