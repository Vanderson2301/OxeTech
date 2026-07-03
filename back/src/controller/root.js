export const rootController = ((req, res) => {
    res.send("Estou na escuta!");
});

export const versionController = ((req, res) => {
    res.send("Versão 1.0.0");
});