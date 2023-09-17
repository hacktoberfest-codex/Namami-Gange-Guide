export default (success: boolean, message: any) => {
  if (success) {
    return {success, message};
  } else
    return {
      success,
      error: JSON.parse(
        JSON.stringify(message, Object.getOwnPropertyNames(message))
      ),
    };
};
