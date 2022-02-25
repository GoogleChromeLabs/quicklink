/**
 * Portions copyright 2018 Google Inc.
 * Inspired by Gatsby's prefetching logic, with those portions
 * remaining MIT. Additions include support for Fetch API,
 * XHR switching, SaveData and Effective Connection Type checking.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/
/**
 * Checks if the given string is a same origin url
 * @param {string} str - the URL to check
 * @return {Boolean} true for same origin url
 */
export function isSameOrigin(str){
  if(typeof str === 'string' && window.location.origin !== new URL(str,window.location.origin).origin){
      throw str;
  }
  return true;
}

/**
 * Add a given set of urls to the speculation rules
 * @param {Set} toPrerender - the URLs to add to speculation rules
 * @return {Object} a promise
 */
export function addSpeculationRules(urlsToPrerender){
  return new Promise( (resolve, reject, specScript) => {
    specScript = document.createElement('script');
    specScript.type = 'speculationrules';
    specScript.text = '{"prerender":[{"source": "list","urls": ["'+Array.from(urlsToPrerender).join('","')+'"]}]}';
    document.head.appendChild(specScript);
  });
}

/**
 * Check whether UA supports Speculation Rules API
 * @return {Boolean} whether UA has support for Speculation Rules API
 */
export function hasSpecRulesSupport(){
  return HTMLScriptElement.supports('speculationrules');
}

/**
 * Check whether Spec Rules is already defined in the document
 * @return {Boolean} whether Spec Rules exists/already defined
 */
export function isSpecRulesExists(){
  return document.querySelector('script[type="speculationrules"]');
}
