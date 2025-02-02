---
layout: post
title: "About Sports Nutrition"
date: 2025-01-06
categories: books thoughts sports
---

<a href="https://www.amazon.com/Complete-Guide-Sports-Nutrition-Guides/dp/1472924207" target="_blank">
  <img src="https://m.media-amazon.com/images/I/71rKIMZM66L._AC_UF894,1000_QL80_.jpg" alt="The Complete Guide to Sports Nutrition" width="300" style="border: 2px solid #ccc; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)';" onmouseout="this.style.transform='scale(1)';">
</a>



## 16 Your personal nutrition plan


<div>
  <h3>Calorie Intake Calculator</h3>
  <p>Enter your weight, height, and age to calculate your daily calorie needs:</p>
  <form id="calorie-form">
    <label for="weight">Weight (kg):</label>
    <input type="number" id="weight" required><br><br>

    <label for="height">Height (cm):</label>
    <input type="number" id="height" required><br><br>

    <label for="age">Age (years):</label>
    <input type="number" id="age" required><br><br>

    <button type="button" onclick="calculateCalories()">Calculate</button>
  </form>

  <p id="calorie-output" style="font-weight: bold; margin-top: 10px;"></p>
</div>

<script>
  function calculateCalories() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
      document.getElementById("calorie-output").textContent = "Please enter valid numbers for weight, height, and age.";
      return;
    }

    const calories = 10 * weight + 6.25 * height - 5 * age + 5;
    document.getElementById("calorie-output").textContent = `Your daily calorie needs are approximately ${Math.round(calories)} calories.`;
  }
</script>



#### Plan dnevne prehrane: 3000 kalorija (kcal)

|         |                                        | Kalorije (kcal) | Proteini (g) | Ugljikohidrati (g) | Masti (g)   | 
| ---     | -----------                            | -----------     | -----------  | -----------        | ----------- |
| Obrok 1 | 75 g zobenih                           | 320             | 10           | 52                 | 7           |
|         | 300 ml mlijeka                         | 140             | 10           | 13                 | 5           |
|         | 100 g borovnica                        | 68              | 1            | 15                 | 0           |
|         | 1 komad (40g) tosta od cjelovitog zrna | 95              | 4            | 16                 | 1           |
|         | 10 g maslaca od kikirikija             | 62              | 3            | 1                  | 5           |
|         | TOTAL                                  | 685             | 28           | 96                 | 18          |
|         |                                        |                 |              |                    |             |
| Obrok 2 | 25 g badema                            | 158             | 6            | 2                  | 14          |
|         | 100 g grčkog jogurta                   | 98              | 8            | 9                  | 4           |
|         | 1 banana                               | 99              | 1            | 22                 | 0           |
|         | TOTAL                                  | 355             | 15           | 33                 | 18          |
|         |                                        |                 |              |                    |             |
| Obrok 3 | 200 g kuhanog krumpira                 | 158             | 4            | 33                 | 0           |
|         | 10 g maslinovog ulja                   | 57              | 0            | 0                  | 6           |
|         | 100 g tune                             | 99              | 24           | 0                  | 1           |
|         | salata                                 | 16              | 1            | 2                  | 0           |
|         | 15 g ulja/octa                         | 69              | 0            | 0                  | 7           |
|         | 2 klementine/narance                   | 65              | 1            | 13                 | 0           |
|         | TOTAL                                  | 464             | 30           | 48                 | 14          |
|         |                                        |                 |              |                    |             |
| Obrok 4 | 1 Flapjack (https://www.bbcgoodfood.com/recipes/yummy-golden-syrup-flapjacks)                                       |  265               | 5             | 24                   | 16            |
|         | TOTAL                                |  265               | 5             | 24                   | 16            |
|         |                                        |                 |              |                    |             |
| Obrok 5  | 25 g whey          | 100                | 18             | 2                  | 2            | 
|          | 300 ml mlijeka     | 140                | 10             | 13                 | 5            |
|          | 1 banana           | 99                 | 1              | 22                 | 0            |
|          | TOTAL              | 339                | 29             | 37                 | 7            |
|          |                    |                    |                |                    |              |
| Obrok 6  | 125 g pilecih prsa             | 127                | 30             | 0                  | 1            |
|          | 75 g tjestenine                | 269                | 10             | 53                 | 1            |
|          | 1 zlica (11 g) maslinovog ulja | 99                 | 0              | 0                  | 11           |
|          | 100 g brokule                  | 40                 | 4              | 2                  | 1            |
|          | 100 g mrkve                    | 42                 | 1              | 8                  | 0            |
|          | 30 g pasta sauce/tomato salsa  | 13                 | 0              | 2                  | 0            |
|          | TOTAL                          | 590                | 45             | 65                 | 14           |
|          |                                |                    |                |                    |              |
| Obrok 7  | 2 komada (80 g) tosta od cjelovitog zrna | 190       | 8       |  32         | 2       |
|          | 20 g maslaca od kikirikija               | 124       | 5       |  3          | 10      |
|          | TOTAL                                    | 314       | 13      |  35         | 12      |
|          |                                        |                 |              |                    |             |
|TOTAL     |                                        | 3013            | 165          | 338                | 102         |




- create step-by-step guide for calculating calorie, carbohydrate, protein and fat needs
- steps
    1. estimate your metabolic rate (RMR) (e.g. 1668 kcal)
    - how many calories you would burn if you were to do nothing but rest for 24 hours
    - the minimum amount of energy needed to keep your body functioning
    
    - Men: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5
    - for me: 10 x 77 (kg) + 6.25 x 180 (cm) - 5 x 25 + 5 = 1,775 kcal
    
    
    2. calculate your daily energy expenditure (e.g. 2335 kcal)
    - PAL factor accounts for the energy expenditure of your daily lifestyle activities, such as walking, household chores, and general movement throughout the day
    - it reflects an overall average of energy expenditure excluding structured exercise
    
    - Mostly inactive or sedentary: 1.2
        - Office worker or student sitting for most of the day with minimal physical activity.
        - Example day: Wake up, commute by car, work at a desk, cook a simple meal, relax on the couch watching TV, and go to bed.
    - Fairly active: 1.3
        - Someone with a desk job who incorporates light physical activity, such as short walks, standing more often, or light household chores.
        - Example day: Work at a desk, but take the stairs instead of the elevator, walk the dog for 15–20 minutes, and do light cleaning at home.
    - Moderately active: 1.4
        - A person who moves around consistently during the day, such as a teacher, retail worker, or parent chasing after kids.
        - Example day: Spend a few hours on your feet at work, walk to nearby errands, do some gardening, and include light housework or playing with children.
        
    - Active: 1.5
        - Someone with a job that requires moderate physical effort, such as a waiter, nurse, or delivery driver. They may also incorporate walking or recreational activities.
        - Example day: On your feet for most of the day, walk or bike to work, engage in a recreational sport for 30–60 minutes, and do moderate household chores like vacuuming or cleaning.
        
    - Very active: 1.7
        - A person whose job is physically demanding, such as a construction worker, farmer, or professional dancer.
        - Example day: Performing labor-intensive tasks (lifting, carrying, walking long distances) for several hours, or being constantly on the move with limited rest periods.
        
    - for me: 1,775 kcal x 1,4 = 2,485 kcal   
    
    
    3. estimate the number of calories expended during exercise (e.g. 715 kcal)
    
    - look up in the table and come up with a closes estimate
        - let's say i do weights that day
        
    - for me: weight training = 429 kcal
   

    4. add figures from steps 2 and 3
    
    - for me: 2,485 kcal + 429 kcal = 2,914 kcal
    - these is the amount of calories i need to maintain my body weight that day
    
    - if you want to lose weight: reduce calorie intake by 15%
    - if you want to gain weight: increase your calorie intake by 20%
    
     
    5. calculate your carbohydrate requirement
    - okay, now that the first part is done let's make it more concrete
    - how to eat x number of calories
    
    - calories = carbs + proteins + fats
    - carbs amount depends on the intensity of training for that day
    - for me: 5-7 g/kg BW (1 h training) with 77 kg = 385 g - 539 g
    
    6. calculate your protein intake
    
    - pick protein intake based on training intensity and type from table
    - for me: 
        - endurance training: 92 g - 108 g
        - power and strength: 108 g - 154 g
    
    7. calculate your fat intake
    
    - fat (g) = (total daily calories - carbs calories - protein calories) / 9
    - for me: (3,600 - 450*1.2 * 4 - 130*1.2 * 4) / 9 = 90 g


- what i do 
    - prepare in advance a list of meals
    - depending on your daily activities choose one of your meals
    - usually, my days will be structured enough so that i know which of the meals to pick
    
    
    

- i find it strange that you have to take into account both daily energy expenditure and then add it with calories expended during exercise (shouldn t this the factor from step 2. take into account??)



### Ideal plan:

daily nutrition intake
  calories: 3,600 kcal
  protein: 156 g
  carbs: 540 g
  fat: 90 g


meal 1:
  calories: 755 kcal 
  protein: 29 g 
  carbs: 114 g
  fat: 19 g

meal 2:
  calories: 448 kcal 
  protein: 17 g
  carbs: 46 g
  fat: 21 g

meal 3:
  calories: 599 kcal
  protein: 22 g
  carbs: 89 g
  fat: 13 g

meal 4:
  calories: 265 kcal
  protein: 5 g
  carbs: 24 g
  fat: 16 g

meal 5: (workout)
  calories: 130 kcal
  protein: 0 g
  carbs: 33 g
  fat: 0 g

meal 6:
  calories: 339 kcal
  protein: 29 g
  carbs: 37 g
  fat: 7 g

meal 7:
  calories: 693 kcal
  protein: 30 g
  carbs: 111 g
  fat: 12 g

meal 8:
  calories: 314 kcal
  protein: 13 g
  carbs: 35 g
  fat: 12 g


TOTAL:
  calories: 3,543 kcal
  protein: 145 g
  carbs: 489 g
  fat: 100 g



### Reality

Daily Nutrition Breakdown
    - Calories: 3,600 kcal
    - Protein: 156 g
    - Carbs: 540 g
    - Fat: 90 g
    
Meal Timing
    - Meal 1: Breakfast (7:30 AM)
    - Meal 2: Mid-morning Snack (10:30 AM)
    - Meal 3: Lunch (1:00 PM)
    - Meal 4: Pre-workout Snack (4:30 PM)
    - Meal 5: Dinner (7:30 PM)
    
    
Meal 1: Breakfast
    - Calories: 800 kcal
    - Macros: 35g protein, 100g carbs, 20g fat

    - Recipe:
        - 1 cup (80g) rolled oats (300 kcal, 54g carbs, 6g protein, 6g fat) +
        - 1 scoop (30g) whey protein (120 kcal, 24g protein, 2g carbs) + 
        - 1 tbsp peanut butter (90 kcal, 8g fat, 3g carbs, 3g protein) +
        - 1 medium banana (105 kcal, 27g carbs) +
        - 200ml low-fat milk (100 kcal, 8g protein, 12g carbs) +
        - Preparation:
            - Cook oats in milk, mix in whey protein, and top with banana and peanut butter.
            
            
Meal 2: Mid-morning Snack
    - Calories: 600 kcal
    - Macros: 25g protein, 80g carbs, 10g fat

    - Recipe:
        - 2 rice cakes (70 kcal, 16g carbs)
        - 1 cup Greek yogurt (150 kcal, 15g protein, 10g carbs, 3g fat)
        - 1 medium apple (95 kcal, 25g carbs)
        - 20 almonds (140 kcal, 12g fat, 5g carbs, 4g protein)
        - 1 tbsp honey (60 kcal, 17g carbs)
        - Preparation:
            - Top rice cakes with Greek yogurt, honey, and sliced apple. Enjoy almonds on the side.
            

Meal 3: Lunch
    - Calories: 900 kcal
    - Macros: 40g protein, 120g carbs, 20g fat

    - Recipe:
        - 150g grilled chicken breast (250 kcal, 45g protein, 3g fat)
        - 1 cup cooked brown rice (215 kcal, 45g carbs, 5g protein)
        - 1 cup steamed broccoli (55 kcal, 10g carbs, 5g protein)
        - 1 tbsp olive oil (120 kcal, 14g fat)
        - 100g avocado (160 kcal, 15g fat, 9g carbs, 2g protein)
        - Preparation:
            - Grill chicken, steam broccoli, and drizzle olive oil over rice and broccoli. Slice avocado as a side.
            

Meal 4: Pre-workout Snack
    - Calories: 500 kcal
    - Macros: 30g protein, 100g carbs, 5g fat

    - Recipe:
        - 1 medium sweet potato (112 kcal, 26g carbs)
        - 1 scoop (30g) whey protein (120 kcal, 24g protein)
        - 1 tbsp almond butter (90 kcal, 8g fat, 3g carbs)
        - 1 orange (62 kcal, 15g carbs)
        - Preparation:
            - Bake sweet potato and have it alongside whey protein (shake with water), almond butter, and orange.
            
Meal 5: Dinner
    - Calories: 800 kcal
    - Macros: 30g protein, 140g carbs, 20g fat

    - Recipe:
        - 200g grilled salmon (400 kcal, 40g protein, 20g fat)
        - 1 cup quinoa (220 kcal, 40g carbs, 8g protein, 3g fat)
        - 1 cup mixed vegetables (50 kcal, 10g carbs, 2g protein)
        - 1 tsp olive oil (40 kcal, 4.5g fat)
    - Preparation:
        - Grill salmon, cook quinoa, and stir-fry vegetables in olive oil.


    
    




## 17 Recipes


