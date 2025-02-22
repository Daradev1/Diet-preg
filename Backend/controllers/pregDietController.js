import meals from '../assets.js'

// Function to calculate daily caloric needs
function calculateCalories(weight, height, age, activityLevel, trimester) {
    if (weight <= 0 || height <= 0 || age <= 0 || trimester < 1 || trimester > 3) {
        throw new Error("Invalid input values");
    }

    let BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5; // Mifflin-St Jeor Equation
    const activityMultipliers = { "light": 1.2, "moderate": 1.55, "active": 1.75, "very active": 2.0 };
    let totalCalories = BMR * (activityMultipliers[activityLevel] || 1.2);

    let trimesterAdjustment = (trimester === 1) ? 300 : (trimester === 2) ? 350 : 450;
    totalCalories += trimesterAdjustment;

    return Math.round(totalCalories);
}

// Function to distribute calories across meals
function distributeMeals(totalCalories, percentages = { breakfast: 0.25, lunch: 0.35, dinner: 0.30, snacks: 0.10 }) {
    return {
        breakfast: Math.round(totalCalories * percentages.breakfast),
        lunch: Math.round(totalCalories * percentages.lunch),
        dinner: Math.round(totalCalories * percentages.dinner),
        snacks: Math.round(totalCalories * percentages.snacks)
    };
}

// Function to select a unique meal for each category
function getRandomMeal(calories, usedMeals, minProtein = 20, minCarbs = 30, minFats = 10) {
    let filteredMeals = meals.filter(meal => 
        meal.calories <= calories && 
        !usedMeals.includes(meal.dish) &&
        meal.protein >= minProtein &&
        meal.carbs >= minCarbs &&
        meal.fats >= minFats
    );
    if (filteredMeals.length === 0) return null;
    let randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
    usedMeals.push(randomMeal.dish);
    return randomMeal;
}

// Function to recommend meals for the day
function recommendMeals(mealPlan) {
    let usedMeals = [];
    return {
        breakfast: getRandomMeal(mealPlan.breakfast, usedMeals) || meals[0],
        lunch: getRandomMeal(mealPlan.lunch, usedMeals) || meals[1],
        dinner: getRandomMeal(mealPlan.dinner, usedMeals) || meals[2],
        snacks: getRandomMeal(mealPlan.snacks, usedMeals) || meals[3]
    };
}

// Express controller function
  const dietController = async (req,res)=>{ 
    try {
        // Destructure user inputs from req.body
        const { weight, height, age, activityLevel, trimester } = req.body;

        // Validate required fields
        if (!weight || !height || !age || !activityLevel || !trimester) {
            return res.status(400).json({ error: "Missing required fields in request body" });
        }

        // Run calculations
        let totalCalories = calculateCalories(weight, height, age, activityLevel, trimester);
        let mealPlan = distributeMeals(totalCalories);
        let recommendedMeals = recommendMeals(mealPlan);

        // Send response
        res.status(200).json({
            totalDailyCalories: totalCalories,
            mealDistribution: mealPlan,
            recommendedMeals: recommendedMeals
        });
    } catch (error) {
        console.error("Error in /recommend-meals:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export {dietController}

