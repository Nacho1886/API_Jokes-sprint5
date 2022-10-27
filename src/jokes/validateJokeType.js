export const validateJokeType = joke => {
    if (joke.type === "twopart") {
        return [joke.setup, joke.delivery];
    }
    return [joke.joke];
};
