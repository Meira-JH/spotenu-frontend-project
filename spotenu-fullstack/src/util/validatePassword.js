
export function validatePassword( password ) {
    const regexp = new RegExp(/(?=.{6,})/);
    const validation = regexp.test(password);

    return validation 
    }