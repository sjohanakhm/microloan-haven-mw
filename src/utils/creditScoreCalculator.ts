interface CreditScoreFactors {
  [key: string]: number;
}

export const calculateCreditScore = (formData: any): {
  score: number;
  category: string;
  factors: CreditScoreFactors;
} => {
  let score = 50; // Base score
  const factors: CreditScoreFactors = {};

  // Employment status scoring
  if (formData.employmentStatus) {
    switch (formData.employmentStatus) {
      case "employed":
        score += 20;
        factors["Stable employment"] = 20;
        break;
      case "self-employed":
        score += 15;
        factors["Self-employment"] = 15;
        break;
      case "retired":
        score += 10;
        factors["Retirement status"] = 10;
        break;
      case "student":
        score += 5;
        factors["Student status"] = 5;
        break;
      case "unemployed":
        score -= 10;
        factors["Unemployment"] = -10;
        break;
    }
  }

  // Income level scoring
  if (formData.incomeLevel) {
    if (formData.incomeLevel.includes("more-than-10000")) {
      score += 20;
      factors["High income"] = 20;
    } else if (formData.incomeLevel.includes("5000-10000")) {
      score += 15;
      factors["Good income"] = 15;
    } else if (formData.incomeLevel.includes("2000-5000")) {
      score += 10;
      factors["Moderate income"] = 10;
    } else {
      score += 5;
      factors["Lower income"] = 5;
    }
  }

  // Existing loans scoring
  if (formData.existingLoans === "yes") {
    score -= 10;
    factors["Existing loans"] = -10;
  } else if (formData.existingLoans === "no") {
    score += 10;
    factors["No existing loans"] = 10;
  }

  // Outstanding loan amount scoring
  if (formData.outstandingLoanAmount) {
    if (formData.outstandingLoanAmount.includes("less-than-10000")) {
      score -= 5;
      factors["Low outstanding debt"] = -5;
    } else if (formData.outstandingLoanAmount.includes("10000-50000")) {
      score -= 10;
      factors["Medium outstanding debt"] = -10;
    } else if (formData.outstandingLoanAmount.includes("50000-100000")) {
      score -= 15;
      factors["High outstanding debt"] = -15;
    } else if (formData.outstandingLoanAmount.includes("more-than-100000")) {
      score -= 20;
      factors["Very high outstanding debt"] = -20;
    }
  }

  // Credit score self-assessment
  if (formData.creditScore) {
    switch (formData.creditScore) {
      case "excellent":
        score += 20;
        factors["Excellent credit history"] = 20;
        break;
      case "very":
        score += 15;
        factors["Very good credit history"] = 15;
        break;
      case "good":
        score += 10;
        factors["Good credit history"] = 10;
        break;
      case "fair":
        score += 5;
        factors["Fair credit history"] = 5;
        break;
      case "poor":
        score -= 5;
        factors["Poor credit history"] = -5;
        break;
    }
  }

  // Ensure score stays within 0-100 range
  score = Math.min(100, Math.max(0, score));

  // Determine risk category
  let category = "";
  if (score >= 80) {
    category = "Low Risk";
  } else if (score >= 60) {
    category = "Moderate Risk";
  } else if (score >= 40) {
    category = "Medium Risk";
  } else if (score >= 20) {
    category = "High Risk";
  } else {
    category = "Very High Risk";
  }

  return { score, category, factors };
};
