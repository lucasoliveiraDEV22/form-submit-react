const API_URL = "https://sua-api.com"; // Substituir pelo endpoint real

export const submitFormData = async (data) => {
  try {
    const response = await fetch(`${API_URL}/submit-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar os dados.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};