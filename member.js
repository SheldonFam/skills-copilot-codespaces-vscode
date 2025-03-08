function skillsMember(name, skill) {
    if (!name || !skill) {
        console.log("Please provide both name and skill.");
        return;
    }
    console.log(`${name} has the skill: ${skill}`);
}

// Example usage:
skillsMember("Alice", "JavaScript");