import { useState } from "react";

const questions = [
  // ── CORRELATION ──────────────────────────────────────────────
  {
    id: 1,
    topic: "Correlation",
    question: "What does correlation analysis study?",
    options: [
      "The cause-and-effect relationship between variables",
      "The association or relationship between two or more variables",
      "The prediction of one variable from another",
      "The distribution of a single variable over time",
    ],
    answer: 1,
    explanation:
      "Correlation analysis is a statistical tool that studies the association or relationship between two or more variables.",
  },
  {
    id: 2,
    topic: "Correlation",
    question: "What is the range of the Pearson correlation coefficient (r)?",
    options: ["0 to 1", "-∞ to +∞", "-1 to +1", "0 to +∞"],
    answer: 2,
    explanation:
      "The value of r ranges between -1 and +1, where -1 is a perfect negative and +1 is a perfect positive correlation.",
  },
  {
    id: 3,
    topic: "Correlation",
    question:
      "Which correlation value indicates a 'very high degree' of positive correlation?",
    options: [
      "+0.50 to +0.74",
      "+0.25 to +0.49",
      "+0.75 to +0.89",
      "+0.9 or more",
    ],
    answer: 3,
    explanation:
      "A correlation of +0.9 or more indicates a very high degree of positive correlation.",
  },
  {
    id: 4,
    topic: "Correlation",
    question: "What does a scatter diagram primarily help to analyze?",
    options: [
      "The frequency distribution of a single variable",
      "The relationship between two variables",
      "The normal distribution of data",
      "The time-series trend of data",
    ],
    answer: 1,
    explanation:
      "A scatter diagram is a tool for analyzing relationships between two variables and determining how closely they are related.",
  },
  {
    id: 5,
    topic: "Correlation",
    question: "In a scatter plot, what does a positive relationship look like?",
    options: [
      "Points clustered randomly",
      "Points forming a downward slope",
      "Points forming an upward slope",
      "Points arranged in a circle",
    ],
    answer: 2,
    explanation:
      "In a positive relationship, as X increases, Y also increases, forming an upward slope pattern.",
  },
  {
    id: 6,
    topic: "Correlation",
    question: "Which of the following is an example of negative correlation?",
    options: [
      "Height and weight",
      "Study time and grades",
      "Price and quantity demanded",
      "Age and experience",
    ],
    answer: 2,
    explanation:
      "Price and quantity demanded move in opposite directions — as price rises, demand falls — which is a negative correlation.",
  },
  {
    id: 7,
    topic: "Correlation",
    question: "The Pearson correlation coefficient is symmetric. This means:",
    options: [
      "r is always positive",
      "rxy = ryx",
      "r is independent of units",
      "r equals the slope of the regression line",
    ],
    answer: 1,
    explanation:
      "Symmetry means rxy = ryx — the correlation between X and Y is the same as between Y and X.",
  },
  {
    id: 8,
    topic: "Correlation",
    question: "What is the Coefficient of Determination (r²) for r = 0.7?",
    options: ["0.70", "0.49", "0.30", "1.40"],
    answer: 1,
    explanation:
      "r² = (0.7)² = 0.49, meaning 49% of the variation in the dependent variable is explained by the independent variable.",
  },
  {
    id: 9,
    topic: "Correlation",
    question: "What does r² = 0.49 imply about the unexplained variation?",
    options: ["49%", "0%", "51%", "100%"],
    answer: 2,
    explanation:
      "If r² = 0.49, then 49% is explained and the remaining 51% is due to unknown factors.",
  },
  {
    id: 10,
    topic: "Correlation",
    question: "Which assumption is NOT required for Pearson correlation?",
    options: [
      "Both variables measured at interval or ratio level",
      "Linear relationship between variables",
      "One variable must be categorical",
      "Variables approximately normally distributed",
    ],
    answer: 2,
    explanation:
      "Pearson correlation requires both variables to be continuous (interval/ratio), not categorical.",
  },
  {
    id: 11,
    topic: "Correlation",
    question: "In a scatter diagram, what is plotted on the horizontal axis?",
    options: [
      "Always the dependent variable",
      "Always the independent variable",
      "Either variable depending on convention",
      "Time only",
    ],
    answer: 1,
    explanation:
      "By convention, the independent variable (X) is plotted on the horizontal axis and the dependent variable (Y) on the vertical axis.",
  },
  {
    id: 12,
    topic: "Correlation",
    question: "What does a correlation of r = 0 indicate?",
    options: [
      "Perfect positive linear relationship",
      "Perfect negative linear relationship",
      "No linear relationship",
      "Curvilinear relationship",
    ],
    answer: 2,
    explanation:
      "r = 0 (Zero) indicates no linear correlation between the two variables.",
  },
  {
    id: 13,
    topic: "Correlation",
    question:
      "Which visual pattern in a scatter plot suggests a curvilinear relationship?",
    options: [
      "Points clustered along a straight diagonal line",
      "Points spread randomly with no pattern",
      "Points forming a U-shaped or curved pattern",
      "Points forming a perfect vertical line",
    ],
    answer: 2,
    explanation:
      "Curvilinear relationships show U-shaped or arc-shaped patterns rather than straight-line trends.",
  },
  {
    id: 14,
    topic: "Correlation",
    question: "What four things should you look for in a scatter plot?",
    options: [
      "Mean, median, mode, range",
      "Linearity, spread, outliers, correlation",
      "Trend, seasonality, cycle, noise",
      "Intercept, slope, error, fit",
    ],
    answer: 1,
    explanation:
      "When examining a scatter plot, look for: linearity (straight line), spread, outliers, and correlation.",
  },

  // ── REGRESSION ───────────────────────────────────────────────
  {
    id: 15,
    topic: "Regression",
    question: "What is the primary purpose of regression analysis?",
    options: [
      "To study the association between variables",
      "To predict the value of one variable from another when they are related",
      "To test hypotheses about population means",
      "To determine if data is normally distributed",
    ],
    answer: 1,
    explanation:
      "Regression analysis is used to predict the value of one variable (dependent) given the value of another (independent).",
  },
  {
    id: 16,
    topic: "Regression",
    question: "In simple linear regression, which variable is denoted by x?",
    options: [
      "The response variable",
      "The dependent variable",
      "The predictor/independent variable",
      "The error term",
    ],
    answer: 2,
    explanation:
      "In SLR, x is the predictor, explanatory, or independent variable; y is the response or dependent variable.",
  },
  {
    id: 17,
    topic: "Regression",
    question: "What makes linear regression 'simple'?",
    options: [
      "It only uses continuous data",
      "It only involves one predictor variable",
      "It always produces a perfect fit",
      "It requires no assumptions",
    ],
    answer: 1,
    explanation:
      "Simple linear regression gets the 'simple' adjective because it concerns the study of only one predictor (independent) variable.",
  },
  {
    id: 18,
    topic: "Regression",
    question: "What is the regression equation of Y on X?",
    options: ["y = a - bx", "y = a + bx", "x = a + by", "y = b + ax"],
    answer: 1,
    explanation:
      "The regression equation of y on x is given by y = a + bx, where y is the dependent and x is the independent variable.",
  },
  {
    id: 19,
    topic: "Regression",
    question: "Are the regression equation of y on x and x on y the same?",
    options: [
      "Yes, they are identical",
      "No, they are different equations",
      "Only when r = 1",
      "Only when data is normally distributed",
    ],
    answer: 1,
    explanation:
      "The regression equation of y on x ≠ the regression equation of x on y; they are two different equations.",
  },
  {
    id: 20,
    topic: "Regression",
    question:
      "What method is used to estimate the coefficients in linear regression?",
    options: [
      "Maximum Likelihood Estimation",
      "Ordinary Least Squares (OLS)",
      "Method of Moments",
      "Gradient Boosting",
    ],
    answer: 1,
    explanation:
      "OLS (Ordinary Least Squares) minimizes the error sum of squares to determine the best-fit values of a and b.",
  },
  {
    id: 21,
    topic: "Regression",
    question: "In OLS regression, what is the formula for the slope b?",
    options: [
      "b = SSxy / SSxx",
      "b = SSxx / SSyy",
      "b = n∑xy / ∑x∑y",
      "b = r × (sy/sx)",
    ],
    answer: 0,
    explanation:
      "The OLS estimate for the slope is b = SSxy / SSxx (sum of products divided by sum of squares of X).",
  },
  {
    id: 22,
    topic: "Regression",
    question: "What does the Coefficient of Determination R² represent?",
    options: [
      "Ratio of unexplained variation to total variation",
      "Ratio of explained variation to total variation",
      "The slope of the regression line",
      "The correlation between residuals and fitted values",
    ],
    answer: 1,
    explanation:
      "R² = explained variation / total variation; it shows what proportion of the dependent variable's variation is explained.",
  },
  {
    id: 23,
    topic: "Regression",
    question:
      "The correlation coefficient r is the ________ of the two regression coefficients.",
    options: [
      "arithmetic mean",
      "geometric mean",
      "harmonic mean",
      "weighted mean",
    ],
    answer: 1,
    explanation:
      "r = √(byx × bxy), making r the geometric mean of the two regression coefficients.",
  },
  {
    id: 24,
    topic: "Regression",
    question:
      "If one regression coefficient is greater than unity, then the other must be:",
    options: [
      "Also greater than unity",
      "Equal to unity",
      "Less than unity",
      "Negative",
    ],
    answer: 2,
    explanation:
      "If one regression coefficient exceeds 1, the other must be less than 1 so their product ≤ 1.",
  },
  {
    id: 25,
    topic: "Regression",
    question: "Both regression coefficients byx and bxy must have:",
    options: [
      "Opposite signs",
      "The same sign",
      "Positive signs only",
      "No sign constraint",
    ],
    answer: 1,
    explanation:
      "Both regression coefficients must have the same sign — both positive or both negative.",
  },
  {
    id: 26,
    topic: "Regression",
    question:
      "Multiple regression extends simple linear regression to allow for:",
    options: [
      "Multiple dependent variables",
      "2 or more independent variables",
      "Non-linear relationships only",
      "Time-series data only",
    ],
    answer: 1,
    explanation:
      "Multiple regression is the logical extension allowing 2 or more independent variables while retaining one dependent variable.",
  },
  {
    id: 27,
    topic: "Regression",
    question:
      "In the multiple regression model Yi = β0 + β1X1i + β2X2i + ei, what is β0?",
    options: [
      "Population slope for X1",
      "Random error term",
      "Y-intercept",
      "Coefficient of determination",
    ],
    answer: 2,
    explanation: "β0 is the Y-intercept in the multiple regression model.",
  },
  {
    id: 28,
    topic: "Regression",
    question: "Regression coefficients are independent of change of:",
    options: [
      "Scale",
      "Origin",
      "Both scale and origin",
      "Neither scale nor origin",
    ],
    answer: 1,
    explanation:
      "Regression coefficients are independent of change of origin but NOT of scale.",
  },
  {
    id: 29,
    topic: "Regression",
    question: "What is the Error Sum of Squares (SSE) equal to?",
    options: ["SST + SSR", "SST - SSR", "SSR - SST", "SST × SSR"],
    answer: 1,
    explanation:
      "SSE = SST - SSR (Total variation minus the explained/regression variation).",
  },

  // ── TIME SERIES ───────────────────────────────────────────────
  {
    id: 30,
    topic: "Time Series",
    question: "How is a time series mathematically defined?",
    options: [
      "Yt = f(Y, μ)",
      "Yt = f(t); t = t1, t2, t3...",
      "Yt = T + S × C",
      "Yt = β0 + β1t + ε",
    ],
    answer: 1,
    explanation:
      "A time series is defined by the functional relationship Yt = f(t), where Yt is the value of the phenomenon at time t.",
  },
  {
    id: 31,
    topic: "Time Series",
    question: "What are the four components of a time series?",
    options: [
      "Mean, Median, Mode, Range",
      "Trend, Seasonality, Cyclicality, Regression",
      "Secular Trend, Seasonal Variation, Cyclic Variation, Irregular Variation",
      "AR, MA, I, SARIMA",
    ],
    answer: 2,
    explanation:
      "The four components are: Secular Trend, Seasonal Variation, Cyclic Variation, and Irregular (Random) Variation.",
  },
  {
    id: 32,
    topic: "Time Series",
    question: "What is 'secular trend' in time series?",
    options: [
      "Short-term random fluctuations",
      "The general tendency to increase, decrease, or remain stable over a long period",
      "Repeated patterns within a single year",
      "Oscillations caused by economic cycles",
    ],
    answer: 1,
    explanation:
      "Secular trend is the general long-term movement (upward, downward, or stable) of a data set over time.",
  },
  {
    id: 33,
    topic: "Time Series",
    question: "What is the difference between linear and non-linear trend?",
    options: [
      "Linear trends change rapidly; non-linear are slow",
      "Linear values cluster around a straight line; non-linear values do not",
      "Linear means seasonal; non-linear means cyclical",
      "There is no practical difference",
    ],
    answer: 1,
    explanation:
      "Linear trend: values cluster around a straight line. Non-linear: values do not lie around any straight line.",
  },
  {
    id: 34,
    topic: "Time Series",
    question: "Cyclic variations differ from seasonal variations because:",
    options: [
      "Cyclic variations are random and unpredictable",
      "Cyclic periods are more than one year and not as regular as seasonal",
      "Cyclic variations only occur in quarterly data",
      "Cyclic variations are caused by weather changes",
    ],
    answer: 1,
    explanation:
      "Cyclic variations are recurrent movements with periods more than one year and are not as regular as seasonal variations.",
  },
  {
    id: 35,
    topic: "Time Series",
    question: "Which of the following is an example of seasonal variation?",
    options: [
      "Decline in birth rate over decades",
      "Increase in umbrella demand during the rainy season",
      "Price fluctuations due to war",
      "Population growth over 50 years",
    ],
    answer: 1,
    explanation:
      "Seasonal variation is caused by regular, periodic changes — like the demand for umbrellas rising in the rainy season.",
  },
  {
    id: 36,
    topic: "Time Series",
    question: "Irregular (random) variations are best described as:",
    options: [
      "Predictable changes due to seasons",
      "Long-term directional movements",
      "Purely random, unpredictable fluctuations beyond human control",
      "Oscillations with fixed periods greater than one year",
    ],
    answer: 2,
    explanation:
      "Irregular variations are purely random, unpredictable fluctuations due to factors beyond human control (e.g., floods, wars).",
  },
  {
    id: 37,
    topic: "Time Series",
    question: "What is the additive model in time series?",
    options: [
      "Yt = Tt × St × Ct × Rt",
      "Yt = Tt + St + Ct + Rt",
      "Yt = Tt + St × Ct",
      "Yt = Tt / (St + Ct + Rt)",
    ],
    answer: 1,
    explanation:
      "The additive model is Yt = Tt + St + Ct + Rt, where all components are added together.",
  },
  {
    id: 38,
    topic: "Time Series",
    question: "What is the multiplicative model in time series?",
    options: [
      "Yt = Tt + St + Ct + Rt",
      "Yt = Tt × St × Ct × Rt",
      "Yt = (Tt + St) × (Ct + Rt)",
      "Yt = Tt + St × Ct × Rt",
    ],
    answer: 1,
    explanation:
      "The multiplicative model is Yt = Tt × St × Ct × Rt, where components are multiplied.",
  },
  {
    id: 39,
    topic: "Time Series",
    question: "In the additive model, what is the long-run sum of Rt?",
    options: ["1", "∞", "0", "Undefined"],
    answer: 2,
    explanation:
      "In the additive model, ∑Rt = 0 in the long run, as random fluctuations cancel out.",
  },
  {
    id: 40,
    topic: "Time Series",
    question:
      "In the multiplicative model, the geometric mean of St, Ct, and Rt over the long run is:",
    options: ["0", "−1", "1 (unity)", "Undefined"],
    answer: 2,
    explanation:
      "In the multiplicative model, the indices St, Ct, and Rt fluctuate above or below unity and their geometric means are unity over the long run.",
  },
  {
    id: 41,
    topic: "Time Series",
    question: "What are the two main objectives of time series analysis?",
    options: [
      "Data cleaning and visualization",
      "Studying past behavior and making forecasts for the future",
      "Hypothesis testing and confidence intervals",
      "Outlier detection and normalization",
    ],
    answer: 1,
    explanation:
      "The two main objectives are: (1) to study the past behavior of data, and (2) to make forecasts for the future.",
  },
  {
    id: 42,
    topic: "Time Series (R)",
    question: "Which R function is used to create a time series object?",
    options: ["series()", "timeseries()", "ts()", "createTS()"],
    answer: 2,
    explanation:
      "The ts() function in R is used to create time series objects from data vectors.",
  },
  {
    id: 43,
    topic: "Time Series (R)",
    question:
      "In the R ts() function, what does the 'frequency' parameter represent?",
    options: [
      "The total number of observations",
      "The number of observations per unit time",
      "The start date of the time series",
      "The interval between observations in seconds",
    ],
    answer: 1,
    explanation:
      "The 'frequency' parameter specifies the number of observations per unit time (e.g., 12 for monthly, 4 for quarterly).",
  },
  {
    id: 44,
    topic: "Time Series (R)",
    question:
      "What R package provides functions for time series forecasting including ARIMA and exponential smoothing?",
    options: ["ggplot2", "forecast", "dplyr", "tidyr"],
    answer: 1,
    explanation:
      "The 'forecast' package provides a wide range of methods including exponential smoothing, ARIMA, and neural networks.",
  },
  {
    id: 45,
    topic: "Time Series (R)",
    question: "What does the auto.arima() function in R do?",
    options: [
      "Plots the time series data automatically",
      "Automatically fits the best ARIMA model to the data",
      "Converts data to a stationary time series",
      "Generates random ARIMA parameters",
    ],
    answer: 1,
    explanation:
      "auto.arima() automatically selects and fits the best ARIMA model using statistical criteria.",
  },
  {
    id: 46,
    topic: "Time Series (R)",
    question:
      "What dataset is commonly used to demonstrate time series forecasting in R?",
    options: ["mtcars", "iris", "AirPassengers", "Titanic"],
    answer: 2,
    explanation:
      "The AirPassengers dataset (US airline passengers from 1949 to 1960) is a classic dataset for demonstrating time series forecasting in R.",
  },
  {
    id: 47,
    topic: "Time Series (R)",
    question:
      "What does the decompose() function in R do with the 'multiplicative' parameter?",
    options: [
      "Multiplies all values by a constant",
      "Decomposes the series assuming multiplicative interaction of trend, seasonality, and error",
      "Creates a multiplicative regression model",
      "Converts the series to monthly frequency",
    ],
    answer: 1,
    explanation:
      "decompose(data, 'multiplicative') separates the time series into trend, seasonal, and random components using a multiplicative model.",
  },
  {
    id: 48,
    topic: "Time Series (R)",
    question: "What does ARIMA stand for?",
    options: [
      "Autoregressive Integrated Moving Average",
      "Automated Regression In Multiple Analysis",
      "Additive Regression Iterative Model Algorithm",
      "Auto-Residual Integrated Mean Analysis",
    ],
    answer: 0,
    explanation:
      "ARIMA = Autoregressive Integrated Moving Average — a widely used time series forecasting method.",
  },
  {
    id: 49,
    topic: "Time Series (R)",
    question: "In ARIMA(2,1,1)(0,1,0)[12], what does I(1) represent?",
    options: [
      "One autoregressive term",
      "First-order differencing to make the series stationary",
      "One moving average term",
      "One seasonal period",
    ],
    answer: 1,
    explanation:
      "The 'I' in ARIMA stands for Integrated; I(1) means first-order differencing is applied to achieve stationarity.",
  },
  {
    id: 50,
    topic: "Time Series (R)",
    question: "What does the [12] in ARIMA(2,1,1)(0,1,0)[12] indicate?",
    options: [
      "12 autoregressive terms",
      "12 years of data",
      "A seasonal period of 12 months",
      "12 forecast horizons",
    ],
    answer: 2,
    explanation:
      "The [12] specifies a seasonal period of 12 months, appropriate for monthly data.",
  },
  {
    id: 51,
    topic: "Time Series (R)",
    question: "What does the shaded area in an ARIMA forecast plot represent?",
    options: [
      "Historical data range",
      "The confidence interval (level of uncertainty) for the forecast",
      "Seasonal variation",
      "The trend component",
    ],
    answer: 1,
    explanation:
      "The shaded area in a forecast plot represents the confidence interval, indicating the level of uncertainty in the predictions.",
  },
  {
    id: 52,
    topic: "Time Series (R)",
    question:
      "Which R package was developed by Facebook for business time-series forecasting?",
    options: ["tseries", "rugarch", "prophet", "stlplus"],
    answer: 2,
    explanation:
      "The 'prophet' package was developed by Facebook for simple and fast time series forecasting using additive models.",
  },
  {
    id: 53,
    topic: "Time Series (R)",
    question: "What is STL in the context of time series analysis?",
    options: [
      "Statistical Time Lag",
      "Seasonal Decomposition of Time Series (using Loess)",
      "Standard Test for Linearity",
      "Structured Time-series Learning",
    ],
    answer: 1,
    explanation:
      "STL stands for Seasonal Decomposition of Time Series, useful for removing seasonal and trend components.",
  },
  {
    id: 54,
    topic: "Time Series (R)",
    question:
      "What must be true about time series data before applying ARIMA forecasting?",
    options: [
      "The data must be normally distributed",
      "The data must be stationary",
      "The data must have no missing values",
      "The data must have at least 100 observations",
    ],
    answer: 1,
    explanation:
      "ARIMA requires stationary data. If the series isn't stationary, differencing (the 'I' component) is applied.",
  },
  {
    id: 55,
    topic: "Time Series (R)",
    question:
      "In R, what function call would plot a basic time series object named 'myTS'?",
    options: [
      "ggplot(myTS)",
      "barplot(myTS)",
      "plot.ts(myTS) or plot(myTS)",
      "hist(myTS)",
    ],
    answer: 2,
    explanation:
      "plot.ts() or simply plot() can be used to visualize a ts object in R.",
  },
];

const TOPIC_COLORS = {
  Correlation: {
    bg: "bg-violet-900/30",
    border: "border-violet-500/40",
    badge: "bg-violet-700 text-violet-100",
  },
  Regression: {
    bg: "bg-cyan-900/30",
    border: "border-cyan-500/40",
    badge: "bg-cyan-700 text-cyan-100",
  },
  "Time Series": {
    bg: "bg-emerald-900/30",
    border: "border-emerald-500/40",
    badge: "bg-emerald-700 text-emerald-100",
  },
  "Time Series (R)": {
    bg: "bg-amber-900/30",
    border: "border-amber-500/40",
    badge: "bg-amber-700 text-amber-100",
  },
};

function TopicBadge({ topic }) {
  const c = TOPIC_COLORS[topic] || TOPIC_COLORS["Time Series"];
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
      {topic}
    </span>
  );
}

function QuestionCard({ q, onAnswer, answered }) {
  const c = TOPIC_COLORS[q.topic] || TOPIC_COLORS["Time Series"];
  return (
    <div
      className={`rounded-2xl border ${c.border} ${c.bg} p-5 flex flex-col gap-3`}
      id={`q${q.id}`}
    >
      <div className="flex items-center justify-between gap-2">
        <TopicBadge topic={q.topic} />
        <span className="text-xs text-gray-400 font-mono">#{q.id}</span>
      </div>
      <p className="text-sm text-gray-100 font-medium leading-relaxed">
        {q.question}
      </p>
      <div className="flex flex-col gap-2 mt-1">
        {q.options.map((opt, i) => {
          const isSelected = answered?.selected === i;
          const isCorrect = i === q.answer;
          let cls =
            "text-left text-sm px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer ";
          if (!answered) {
            cls +=
              "border-white/10 text-gray-300 hover:border-white/30 hover:text-white hover:bg-white/5";
          } else if (isCorrect) {
            cls +=
              "border-green-500 bg-green-500/20 text-green-200 font-semibold";
          } else if (isSelected) {
            cls += "border-red-500 bg-red-500/20 text-red-200";
          } else {
            cls += "border-white/5 text-gray-500";
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => !answered && onAnswer(q.id, i)}
              disabled={!!answered}
            >
              <span className="font-mono text-xs mr-2 opacity-60">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-1 text-xs text-gray-400 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
          <span className="font-semibold text-gray-300">💡 </span>
          {q.explanation}
        </div>
      )}
    </div>
  );
}

export default function StatsQuiz() {
  const [view, setView] = useState("list"); // "list" | "quiz"
  const [answers, setAnswers] = useState({});
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const topics = ["All", ...Array.from(new Set(questions.map((q) => q.topic)))];

  const filteredQs =
    filter === "All" ? questions : questions.filter((q) => q.topic === filter);

  const totalPages = Math.ceil(filteredQs.length / ITEMS_PER_PAGE);
  const paginatedQs = filteredQs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const answered = Object.keys(answers).length;
  const correct = Object.values(answers).filter((a) => a.correct).length;
  const score = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  function handleAnswer(qId, selected) {
    const q = questions.find((x) => x.id === qId);
    setAnswers((prev) => ({
      ...prev,
      [qId]: { selected, correct: selected === q.answer },
    }));
  }

  function reset() {
    setAnswers({});
    setCurrentPage(1);
    setFilter("All");
  }

  const progressPct = Math.round((answered / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-30 bg-gray-950/90 backdrop-blur border-b border-white/10 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div>
            <h1 className="text-base font-bold text-white tracking-tight">
              📊 Stats Quiz
            </h1>
            <p className="text-xs text-gray-400">
              Correlation · Regression · Time Series
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Score pill */}
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-400">
                {answered}/{questions.length} answered
              </span>
              <span className="text-xs font-bold text-green-400">
                {correct} correct · {score}%
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setView(view === "list" ? "quiz" : "list")}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition"
              >
                {view === "list" ? "📝 Start Quiz" : "📋 View All"}
              </button>
              <button
                onClick={reset}
                className="text-xs px-3 py-1.5 rounded-lg bg-red-900/40 hover:bg-red-900/60 border border-red-700/30 transition text-red-300"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="max-w-3xl mx-auto mt-2">
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* ── VIEW ALL ── */}
        {view === "list" && (
          <div>
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-400 leading-relaxed">
              <p className="text-gray-200 font-semibold mb-1">
                Review before you quiz 👀
              </p>
              Below are all 55 questions covering{" "}
              <span className="text-violet-400">Correlation</span>,{" "}
              <span className="text-cyan-400">Regression</span>,{" "}
              <span className="text-emerald-400">Time Series</span>, and{" "}
              <span className="text-amber-400">Time Series in R</span>. Browse
              them, then click{" "}
              <strong className="text-white">Start Quiz</strong> to answer
              interactively.
            </div>
            {/* Topic filter */}
            <div className="flex flex-wrap gap-2 mb-5">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setFilter(t);
                    setCurrentPage(1);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-full border transition ${
                    filter === t
                      ? "bg-white text-gray-900 border-white font-bold"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {filteredQs.map((q) => (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-4 ${TOPIC_COLORS[q.topic]?.border || "border-white/10"} ${TOPIC_COLORS[q.topic]?.bg || "bg-white/5"}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TopicBadge topic={q.topic} />
                    <span className="text-xs text-gray-500 font-mono">
                      #{q.id}
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 font-medium mb-2">
                    {q.question}
                  </p>
                  <ol className="list-none flex flex-col gap-1">
                    {q.options.map((opt, i) => (
                      <li
                        key={i}
                        className={`text-xs flex gap-2 ${i === q.answer ? "text-green-400 font-semibold" : "text-gray-400"}`}
                      >
                        <span className="font-mono">
                          {String.fromCharCode(65 + i)}.
                        </span>
                        <span>{opt}</span>
                        {i === q.answer && (
                          <span className="text-green-500">✓</span>
                        )}
                      </li>
                    ))}
                  </ol>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    {q.explanation}
                  </p>
                </div>
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold border transition ${
                        p === currentPage
                          ? "bg-white text-gray-900 border-white"
                          : "border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}
              </div>
            )}
          </div>
        )}

        {/* ── QUIZ MODE ── */}
        {view === "quiz" && (
          <div>
            {/* Topic filter */}
            <div className="flex flex-wrap gap-2 mb-5">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setFilter(t);
                    setCurrentPage(1);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-full border transition ${
                    filter === t
                      ? "bg-white text-gray-900 border-white font-bold"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {paginatedQs.map((q) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  answered={answers[q.id]}
                  onAnswer={handleAnswer}
                />
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 text-xs rounded-lg border border-white/10 text-gray-400 hover:bg-white/10 disabled:opacity-30"
                >
                  ← Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold border transition ${
                        p === currentPage
                          ? "bg-white text-gray-900 border-white"
                          : "border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 text-xs rounded-lg border border-white/10 text-gray-400 hover:bg-white/10 disabled:opacity-30"
                >
                  Next →
                </button>
              </div>
            )}
            {/* Score summary if all done */}
            {answered === questions.length && (
              <div className="mt-8 p-6 rounded-2xl border border-green-500/30 bg-green-900/20 text-center">
                <p className="text-2xl font-bold text-green-400 mb-1">
                  🎉 Quiz Complete!
                </p>
                <p className="text-gray-300 text-sm">
                  You scored{" "}
                  <span className="font-bold text-white">
                    {correct}/{questions.length}
                  </span>{" "}
                  ({score}%)
                </p>
                <button
                  onClick={reset}
                  className="mt-4 text-sm px-5 py-2 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-200 transition"
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
